# Generated by Django 4.1.5 on 2023-01-30 19:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('things', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='thing',
            old_name='create_at',
            new_name='created_at',
        ),
    ]
