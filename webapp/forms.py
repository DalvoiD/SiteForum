from django_registration.forms import RegistrationForm
from webapp.models import CustomUser


class CustomUserForm(RegistrationForm):

    class Meta(RegistrationForm.Meta):
        model = CustomUser
