#include <iostream>
using namespace std;
void display(int arr[], int n) {
            for(int i = 0; i < n; i++) {
              cout << arr[i] << " ";
              }
             cout << endl;
             } 
             
void reverse(int a[],int n){
	for(int i=n-1;i>=0;i--){
		cout<<a[i]<<" ";
	}
	cout<<endl;
}
void Alternate(int arr[], int n) {
    for(int i=0;i<n; i+=2) {
        cout<<arr[i]<< " ";
    }
    cout<<endl;
}
void Multiple(int arr[], int n) {
    for(int i=0;i<n;i++){
        if(arr[i]%7==0){
            cout<<arr[i]<<" ";
        }
    }
    cout<<endl;
}
int sum(int arr[], int n) {
    int total=0;
    int average=0;
    for(int i=0;i<n;i++) {
        total=total+arr[i];
    }
    average=(total)/n;
    cout<<"Average : "<<average<<endl;
    cout<<"Sum : "<<total<<endl;
}
int main(){
    int ar[7]={43,46,87,5,65,49,66};
    display(ar,7);
    reverse(ar,7);
    Alternate(ar,7);
    Multiple(ar,7);
    sum(ar,7);
}