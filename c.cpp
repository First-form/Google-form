#include<iostream>
#include<vector>
using namespace std;

int main()
{
    int t;
    cin>>t;

    while(t--)
    {
        int n,q;
        cin>>n>>q;

        vector<int>a(n);

        for(int i=0;i<n;i++)
        {
            cin>>a[i];
            cout<<a[i]<<" ";
        }

        sort(a.begin(),a.end(),greater<int>());
        vector<int>sum(n,0);
        sum[0]=a[0];

        for(int i=1;i<n;i++)
        {
             sum[i]=sum[i-1]+a[i];
        }



         cout<<endl;
        for(int i=0;i<q;i++)
        {
            int x,y;
            cin>>x>>y;

                   if(y==x)
                    cout<<sum[x-1]<<endl;
                  else cout<<sum[n-1]-sum[n-y-1]<<endl;
        }

    }
}
