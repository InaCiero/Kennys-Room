from django.urls import path
from pri_view import views

urlpatterns = [
    path('KennyRoom/', views.index, name='KennyRoom'),
    # Otros patrones de URL para tu aplicación
]
