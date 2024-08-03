#include <iostream>
using namespace std;
int main(){
	int arr[6]={43,45,66,56,77,65};
	
    int sum=0;

    for(int i=0;i<6;i++){
        if(arr[i]%2==0){
            sum+=arr[i];
        }
    }
    cout<< "Sum of all even elements: " <<sum<<endl;
}