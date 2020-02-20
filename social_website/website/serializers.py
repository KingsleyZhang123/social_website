from rest_framework import serializers 
from website.models import *


class UserAuthSerializer(serializers.ModelSerializer):

	class Meta:
		model = UserAuth
		fields = ('user_id',
				  'password',
				 )

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('user_id',
                  'name',
                  'gender',
                  'department',
                  )


class NoteSerializer(serializers.ModelSerializer):

	class Meta:
		model = Note
		fields = ('id',
				  'content',
				  'post_time',
				  'user_id',
				  'tag_id',
				 )


class CommentSerializer(serializers.ModelSerializer):

	class Meta:
		model = Comment
		fields = ('id',
				  'content',
				  'post_time',
				  'note_id',
				  'replyto_id',
				  'user_id',
				 )



class TagSerializer(serializers.ModelSerializer):

	class Meta:
		model = Tag
		fields = ('id',
				  'title',
				  'image',
				 )


