"""Urls for brewdog_api app.

The urls module contains the urls for the brewdog_api app.
"""
from django.urls import path
from .views import UserView, CalculatorView, LoginView, CustomAuthToken, CalculatorConstantsView, IndividualCalculatorView, RetrieveIndividualUserView,RetrieveResultsBasedOnIDView
from rest_framework.authtoken import views
 
urlpatterns = [
    path('user/', UserView.as_view()),
    path('individualuser/', RetrieveIndividualUserView.as_view()),
    path('calculator/', CalculatorView.as_view()),
    path('login/', LoginView.as_view()),
    path('calculatorconstants/', CalculatorConstantsView.as_view()),
    path('api-token-auth/', CustomAuthToken.as_view()),
    path('individualcalculator/', IndividualCalculatorView.as_view()),
    path('results/', RetrieveResultsBasedOnIDView.as_view()),
]