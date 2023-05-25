#include <iostream>
using namespace std;

int main()
{
    int t,i;
    cin >> t;
    while (t--)
    {
        int i,n, k1=0,k2=0,c2=0,c1=0;
        int a[n],b[n];
        cin >> n ;
        
        for (i = 0; i < n; i++)
        {
            cin >> a[i];
            
        }
        for(i=0;i<n;i++)
        cin>>b[i];
        for(i=0;i<n;i++)
        {
            if (a[i] >= k1 )
            {
                k1 =  a[i]-k1;
                if(k1>0)
                c1++;
            }
            
        }
        for(i=0;i<n;i++)
        {
            if (b[i] >= k2 )
            {
                k2 =  b[i]-k2;
                if(k2>0)
                c2++;
            }
        }
        cout<<""<<c1+c2<<endl;
        
    }
    return 0;
}
