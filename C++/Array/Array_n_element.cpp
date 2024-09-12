-
#include <iostream>
using namespace std;
int main(){
	int arr[6]={43,45,66,56,77,65};
     int i=0;  
    int num=2;  
     while(i<6){
        arr[i]=num;
        num+=2;  
        i++;
    }
     cout<<"Array of even elements: ";
    i=0;    
    while(i<6) {
        cout<<arr[i]<<" ";
        i++;
    }
    cout<<endl;
}