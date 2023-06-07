# Generated by Django 4.2.1 on 2023-05-31 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('cantidad', models.IntegerField()),
                ('desc', models.TextField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('img', models.ImageField(upload_to='imgs/')),
                ('tipo', models.CharField(max_length=50)),
            ],
        ),
    ]
