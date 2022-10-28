# Generated by Django 4.1.2 on 2022-10-28 18:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stores', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Promotion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expire_date', models.DateTimeField()),
                ('store', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='promotions', to='stores.store')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=9)),
                ('description', models.TextField(blank=True, null=True)),
                ('promotion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products.promotion')),
            ],
        ),
    ]
