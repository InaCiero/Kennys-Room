from django.db import models

# Create your models here.
class Producto(models.Model):
    CATEGORIAS =(
        ('SL', 'Salud'),
        ('CP', 'Cosplays'),
        ('JG','Juguetes'),
    )
    id = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    cantidad = models.IntegerField()
    desc = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    img = models.ImageField(upload_to='producto')
    tipo = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre