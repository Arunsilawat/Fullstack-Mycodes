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
//------------------------------------------------------------
#include <iostream>
using namespace std;
int main(){
	int a[6]={23,44,5,66,8,10};
	
	int high,shigh,small;
	high=a[0];
	shigh=a[0];
	small=a[0];
	
	for(int i=1;i<6;i++){
		if(a[i]>high){
			high=a[i];
		}
	}
		
	for(int i=1;i<6;i++){
			if(a[i]>shigh && a[i]<high){
			shigh=a[i];
		}
   	}
   	for(int i=1;i<6;i++){
			if(a[i]>small && a[i]<shigh){
			shigh=a[i];
		}
   	}
   	
	cout<<"High :"<<high<<endl;
	cout<<"Second High :"<<shigh<<endl;
	cout<<"Small :"<<small<<endl;


}
 //------------------------------------------------------------------
 #include <iostream>
using namespace std;

int main(){
	int student[5]{2,3,4,5,6};
	cout<<student[4];
	cout<<student[4];
	cout<<student[4];
	cout<<student[0];

}
//------------------------------------------------------------------
//polymorphism 

#include <iostream>
using namespace std;
//
//class Student {
//	public: 
//	int roll;
//	string name;
//	double marks;
//	
//	
//		Student(){
//			cout<<"Enter Roll no, Name, Marks ";
//			cin>>roll>>name>>marks;
//		}
//};
//
//int main(){
//	int n;
//	cout<<"How many record do u want to insert : ";
//	cin>>n;
//	Student s[n];
//    
//	for(int i=0;i<n;i++){
//		cout<<"name: "<<s[i].name<<endl<<"roll: "<<s[i].roll<<endl<<"marks: "<<s[i].marks<<endl;
//	}
//	
//	int high =s[0].marks;
//	for(int i=1;i<n;i++){
//		if(s[i].marks>high)
//		   high=s[i].marks;
//	}	
//	cout<<"highest marks :"<<high;
//}
//-------------
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
//-------------------------------------------------------------------------
#include <iostream>
using namespace std;
int main(){
//	int n,sum=0,high;
//	cout<<"How many student are there in a class :";
//	cin>>n;
//	int mark[n];
//	string name[n];
//	
//	for(int i=0;i<n;i++){
//		cout<<"enter name of student "<<i+1<<" :";
//		cin>>name[i];	
//		cout<<"enter marks of student "<<i+1<<" :";
//		cin>>mark[i];
//		}
//
//	cout<<"array of student having "<<n<<" students = {"; 
//	
//	
//	for(int i=0;i<n;i++){
//		cout<<"["<<name[i]<<","<<mark[i]<<"]";
//		if(mark[i]>high)
//		high=mark[i];
//	}
//	cout<<"}\n";
//	cout<<"hight:"<<high;
//	
//}
//

int n,high;
cout<<"enter number:";
cin>>n;
string name[n];
int marks[n];
for(int i=0;i<n;i++){
	cout<<"Enter name"<<i+1<<":"<<endl;
	cin>>name[i];
	cout<<"Enter marks"<<i+1<<":"<<endl;
	cin>>marks[i];
}
cout<<"student having :"<<n<<"Student = {";
for(int i=0;i<n;i++){
	cout<<"["<<name[i]<<","<<marks[i]<<"]";
	if(marks[i]>high){
		high=marks[i];
	}
}
cout<<"}"<<endl;
cout<<"Highest marks:"<<high;
}
//-----------------------------------------------------------------------
#include <iostream>
using namespace std;
int main(){
	int a[6]={23,44,5,66,8,10};
	
	int high,shigh,small;
	high=a[0];
	shigh=a[0];
	small=a[0];
	
	for(int i=1;i<6;i++){
	if(a[i]>high){
			high=a[i];
		}
	
		
	if( a[i]<high){
			shigh=a[i];
		}

	if(a[i]>small && a[i]<shigh){
			shigh=a[i];
		}
	}
   	
   	
	cout<<"High :"<<high<<endl;
	cout<<"Second High :"<<shigh<<endl;
	cout<<"Small :"<<small<<endl;


}