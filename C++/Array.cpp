#include <iostream>
using namespace std;
int main(){
	int ar[2][3]={1,2,3,4,5,6};
	cout<<ar[1][1]<<endl;
	cout<<ar[0][2]<<endl;
	int arr[3][2][3]={1,2,3,4,5,6,7,8,9,10,11,12};
	cout<<ar[0][1][1]<<endl;
	cout<<ar[1][0][2]<<endl;
	cout<<ar[0][1][0]<<endl;
};
//---------------------------------------------------------------------------------------------
#include <iostream>
using namespace std;
int main(){
	int a[3][3]={{1,2,3},{4,5,6},{7,8,9}},sum;
	for(int i=0;i<3;i++){
		for(int j=0;j<3;j++){
			cout<<a[i][j]<<"  ";
		}
		cout<<endl;
	}
	for(int i=0;i<3;i++){
		sum=0;
		for(int j=0;j<3;j++){
            sum=sum+a[j][i];
		}
			cout<<sum<<" ";
	}
    	}
//-----------------------------------------------------------------------------------------------