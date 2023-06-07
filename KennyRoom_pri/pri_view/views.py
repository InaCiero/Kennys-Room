from django.shortcuts import render
from .models import Producto


# Create your views here.

def index(request):
    producto = Producto.objects.all()
    return render(request, 'app/index.html', {'stockProductos': producto} )

