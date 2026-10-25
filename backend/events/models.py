from django.db import models

# Create your models here.
class Events(models.Model):

    # CREATE THE FIELDS HERE FOR ORM
    title = models.CharField(max_length=50)
    date = models.DateField()
    description = models.CharField(max_length=400)
    address = models.CharField(max_length=100, null=True)
    # image = models.ImageField()
    # user = models.CharField(max_length=50)

    def __str__(self):

        return self.title
    
    