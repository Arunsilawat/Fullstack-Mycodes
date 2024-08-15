#include <iostream>
using namespace std;
int main(){
	int a,b,h=1;
	cout<<"enter two number :"<<" ";
	cin>>a>>b;
	for(int i=1;i<=a || i<=b;i++){
		if(a%i==0 && b%i==0){
			h=1;
		}
	}
	cout<<"Hcf of you given no: "<<h<<endl;
}