# Generated by Django 2.2.6 on 2020-03-30 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0005_user_profile_pic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='profile_pic',
        ),
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(null=True, upload_to='image/avatar'),
        ),
    ]