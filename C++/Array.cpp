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
//polymorphism 

#include <iostream>
using namespace std;

class Student {
	public: 
	int roll;
	string name;
	double marks;
	
	
		Student(){
			cout<<"Enter Roll no, Name, Marks ";
			cin>>roll>>name>>marks;
		}
};

int main(){
	int n;
	cout<<"How many record do u want to insert : ";
	cin>>n;
	Student s[n];
   
	for(int i=0;i<n;i++){
		cout<<"name: "<<s[i].name<<endl<<"roll: "<<s[i].roll<<endl<<"marks: "<<s[i].marks<<endl;
	}
	
	int high =s[0].marks;
	for(int i=1;i<n;i++){
		if(s[i].marks>high)
		   high=s[i].marks;
	}	
	cout<<"highest marks :"<<high;
}
//---------------------------------------------------------------------------
class Student{
	public:
		int marks,roll;
		string name;
	public:
	    Student(){
	    	cout<<"Enter Name,roll,marks:";
	    	cin>>name>>roll>>marks;
		}	
};
int main(){
	int n;
	cout<<"How many record u entered:";
	cin>>n;
	Student s[n];
	for(int i=0;i<n;i++){
		cout<<"Name:"<<s[i].name<<endl;
		cout<<"Roll Number:"<<s[i].roll<<endl;
		cout<<"Marks:"<<s[i].marks<<endl;
	}
	int high=s[0].marks;
	for(int i=0;i<n;i++){
		if(s[i].marks>high){
			high=s[i].marks;
		}
	}
	cout<<"Highest marks:"<<high;
}