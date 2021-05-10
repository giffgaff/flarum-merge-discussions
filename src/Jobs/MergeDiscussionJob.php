<?php
namespace FoF\MergeDiscussions\Jobs;

use Flarum\Foundation\ValidationException;
use Flarum\Notification\NotificationSyncer;
use FoF\MergeDiscussions\Api\Commands\MergeDiscussion;
use FoF\MergeDiscussions\Notifications\MergeFailedBlueprint;
use FoF\MergeDiscussions\Notifications\MergeFinishedBlueprint;
use FoF\MergeDiscussions\Notifications\MergeStartedBlueprint;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Contracts\Bus\Dispatcher;

class MergeDiscussionJob implements ShouldQueue
{
    private MergeDiscussion $mergeDiscussionCommand;

    public function __construct(MergeDiscussion $command)
    {
        $this->mergeDiscussionCommand = $command;
    }

    public function handle(Dispatcher $bus, NotificationSyncer $notifications)
    {
        if ($this->mergeDiscussionCommand->merge) {
            $notifications->sync(new MergeStartedBlueprint($this->mergeDiscussionCommand), [$this->mergeDiscussionCommand->actor->id]);
        }

        try {
            $bus->dispatch($this->mergeDiscussionCommand);
        }
        catch (\Exception $e) {
            if ($this->mergeDiscussionCommand->merge) {
                $notifications->sync(new MergeFailedBlueprint($this->mergeDiscussionCommand, $e), [$this->mergeDiscussionCommand->actor->id]);
            }
        }

        if ($this->mergeDiscussionCommand->merge) {
            $notifications->sync(new MergeFinishedBlueprint($this->mergeDiscussionCommand), [$this->mergeDiscussionCommand->actor->id]);
        }
    }
}
