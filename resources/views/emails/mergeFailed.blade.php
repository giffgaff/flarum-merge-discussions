{!! $translator->trans('fof-merge-discussions.email.body.merge_failed', [
'{actor_display_name}' => $blueprint->actor->display_name,
'{discussion_url}' => $url->to('forum')->route('discussion', ['id' => $blueprint->mergeDiscussionCommand->discussionId]),
'merge_discussions' => implode("\n", $blueprint->mergeDiscussionCommand->ids),
'reason' => $blueprint->exception->getMessage()
]) !!}
