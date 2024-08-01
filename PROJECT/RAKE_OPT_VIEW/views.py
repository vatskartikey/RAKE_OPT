from django.shortcuts import render
import pandas as pd
import oracledb
from django.conf import settings

user = settings.DATABASES['default']['USER']
password = settings.DATABASES['default']['PASSWORD']
dsn = settings.DATABASES['default']['NAME']
conn = oracledb.connect(user=user, password=password,dsn=dsn)

# Create your views here.
def check(request):
    sql ='''
        select *from VMITTAL.FEM_FRGTTRML'''
    cmp_term = pd.read_sql(sql, conn).to_dict(orient='records')
    print(cmp_term)