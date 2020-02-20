from django.conf.urls import url 
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from website import views 


urlpatterns = [ 
    url(r'^login/$', views.login),
    url(r'^users/register/$', views.register),
    url(r'^tags/$', views.list_tags),
    url(r'^notes/(?P<tag>[0-9]+)$', views.list_notes),
    url(r'^notes/$', views.post_notes),
    url(r'^admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
