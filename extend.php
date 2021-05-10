<?php

/*
 * This file is part of fof/merge-discussions.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\MergeDiscussions;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Database\AbstractModel;
use Flarum\Extend;
use FoF\MergeDiscussions\Events\DiscussionWasMerged;
use FoF\MergeDiscussions\Posts\DiscussionMergePost;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Routes('api'))
        ->get('/discussions/{id}/merge', 'fof.merge-discussions.preview', Api\Controllers\MergePreviewController::class)
        ->post('/discussions/{id}/merge', 'fof.merge-discussions.run', Api\Controllers\MergeController::class),

    (new Extend\Post())
        ->type(DiscussionMergePost::class),

    (new Extend\Event())
        ->listen(DiscussionWasMerged::class, Listeners\CreatePostWhenMerged::class),

    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attribute('canMerge', function (DiscussionSerializer $serializer, AbstractModel $discussion) {
            return $serializer->getActor()->can('merge', $discussion);
        }),

    (new Extend\Notification())
        ->type(Notifications\MergeStartedBlueprint::class, DiscussionSerializer::class, ['alert', 'email'])
        ->type(Notifications\MergeFinishedBlueprint::class, DiscussionSerializer::class, ['alert', 'email'])
        ->type(Notifications\MergeFailedBlueprint::class, DiscussionSerializer::class, ['alert', 'email'])
];
