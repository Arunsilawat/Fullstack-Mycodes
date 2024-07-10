#include <iostream>
using namespace std;

class Node{
	public:
		int data;
		Node *next;
		Node(int d){
			data=d;
			next=NULL;
		}
};
class Linkedlist{
	public:
		Node *head;
		Linkedlist(){
			head=NULL;
		}
		
	void traversal(){
		if(head==NULL){
			cout<<"NO DATA TO TRAVERSAL";
			return;
		}
		else{
			Node *temp=head;
			while(temp!=NULL){
				cout<<temp->data<<" ";
				temp=temp->next;
			}
		}
	}
	void insert_end(int d){
		if(head==NULL){
			head=new Node(d);
		}
		else{
			Node *temp=head;
		    while(temp->next!=NULL){
			temp=temp->next;
		    }
	    	temp->next=new Node(d);
		}
	}
	void delete_end(){
		if(head==NULL){
			cout<<"NO DATA TO DELETE";
			return;
		}
		Node *temp=head;
		while(temp->next==NULL){
			delete(temp);
			head=NULL;
			return;
		}
		while(temp->next->next!=NULL){
				temp=temp->next;
			}
		delete(temp->next);
		temp->next=NULL;
		
	}
	void inser_frant(int d){
		if(head==NULL){
			head=new Node(d);
		}
		else{
			Node *temp=new Node(d);
			temp->next=head;
			head=temp;
		}
	}
	void delete_frant(){
		if(head==NULL){
			cout<<"NO DATA TO DELETE";
		}
		Node *temp=head;
		if(temp->next==NULL){
			delete(temp);
			head=NULL;
		}
		else{
			head=head->next;
			delete(temp);
		}
	}
};
int main(){
	Linkedlist obj;
	obj.insert_end(88);
	obj.insert_end(68);
	obj.insert_end(22);
	obj.insert_end(56);
	obj.delete_end();
	obj.delete_end();
	obj.inser_frant(44);
	obj.inser_frant(33);
	obj.delete_frant();
	obj.delete_frant();
	obj.delete_frant();
	obj.delete_frant();
	obj.delete_frant();
	obj.traversal();
}
