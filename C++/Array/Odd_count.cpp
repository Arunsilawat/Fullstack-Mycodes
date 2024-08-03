#include <iostream>
using namespace std;
int main(){
	int arr[6]={43,45,66,56,77,65};
	
   int countOdd=0;

    for(int i=0;i<6;i++){
        if(arr[i]%2!=0){ 
            countOdd++;
        }
    }
    cout<<"Count of all odd elements: "<<countOdd<<endl;
}