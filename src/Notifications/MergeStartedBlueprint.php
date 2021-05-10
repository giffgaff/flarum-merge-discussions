<?php
namespace FoF\MergeDiscussions\Notifications;

use Flarum\Discussion\Discussion;
use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Notification\MailableInterface;
use Flarum\User\User;
use Symfony\Component\Translation\TranslatorInterface;
use FoF\MergeDiscussions\Api\Commands\MergeDiscussion;

class MergeStartedBlueprint implements BlueprintInterface, MailableInterface
{
    public MergeDiscussion $mergeDiscussionCommand;

    public function __construct(MergeDiscussion $command)
    {
        $this->mergeDiscussionCommand = $command;
    }

    /**
     * Get the user that sent the notification.
     *
     * @return \Flarum\User\User|null
     */
    public function getFromUser(): ?User
    {
        return $this->mergeDiscussionCommand->actor;
    }

    /**
     * Get the model that is the subject of this activity.
     *
     * @return \Flarum\Database\AbstractModel
     */
    public function getSubject(): ?Discussion
    {
        return Discussion::query()->find($this->mergeDiscussionCommand->discussionId);
    }

    /**
     * Get the data to be stored in the notification.
     *
     * @return array|null
     */
    public function getData()
    {
        return ['discussionIdsToMerge' => $this->mergeDiscussionCommand->ids];
    }

    /**
     * Get the serialized type of this activity.
     *
     * @return string
     */
    public static function getType()
    {
        return 'fofMergeDiscussionStarted';
    }

    /**
     * Get the name of the model class for the subject of this activity.
     *
     * @return string
     */
    public static function getSubjectModel()
    {
        return Discussion::class;
    }

    /**
     * Get the name of the view to construct a notification email with.
     *
     * @return string
     */
    public function getEmailView()
    {
        return ['text' => 'fof-merge-discussions::emails.mergeStarted'];
    }

    /**
     * Get the subject line for a notification email.
     *
     * @return string
     */
    public function getEmailSubject(TranslatorInterface $translator)
    {
        return $translator->trans('fof-merge-discussions.email.subject.merge_started');
    }

}
