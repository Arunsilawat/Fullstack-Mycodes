#include <iostream>
using namespace std;
int main(){
      int n,fact=1;
      cout<<"Enter number :";
      cin>>n;
      for(int i=n;i>=1;i--){
      	if(i==1){
      		cout<<i<<"=";
		  }
		  else
		  cout<<i<<"x";
		  fact=fact*i;
	  }
	  cout<<fact;
}