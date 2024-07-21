void Bubble(int A[],int n){
	int temp,flag;
	for (int i=0;i<n-1;i++){
		flag=0;
		for(int j=0;j<n-i-1;j++){
			if(A[j]>A[j+1]){
				temp=A[j];
				A[j]=A[j+1];
				A[j+1]=temp;
				flag=1;
			}
		}
		if(flag==0){
			break;
		}
	}
}
void insertion(int A[],int n){
	int key,j;
	for(int i=1;i<n;i++){
		key=A[i];
		j=i-1;
		while(j>=0 && A[j]>key){
			A[j+1]=A[j];
			j--;
		}
		j++;
		A[j]=key;
	}
}
void selection(int a[],int n){
	int temp,index;
	for(int i=0;i<n-1;i++){
		index=i;
		for(int j=i+1;j<n;j++){
			if(a[index]>a[j]){
				index=j;
			}
		}
		if(i!=index){
			temp=a[i];
			a[i]=a[index];
			a[index]=temp;
		}
	}
}
 void merge(int a[],int low,int mid,int high){
	int i=low,j=mid+1,k=0,size=high-low+1,temp[size];
	while(i<mid && j<high){
		if(a[i]<=a[j]){
			temp[k]=a[i];
			i++,k++;
		}
		else{
			temp[k]=a[j];
			j++,k++;
		}
	}
	while(i<=mid){
		temp[k]=a[i];
		i++,k++;
	}
	while(j<=high){
		temp[k]=a[j];
		j++,k++;
	}
	for(int i=0;i<size;i++){
		a[low]=temp[i];
		low++;
	}
}
void merge_sort(int a[],int low,int high){
	if(low<high){
		int mid=(high+low)/2;
    	merge_sort(a,low,mid);
    	merge_sort(a,mid+1,high);
    	merge(a,low,mid,high);
	}
}

void print(int a[],int n){
	for(int i=0;i<n;i++){
		cout<<a[i]<<" ";
	}
}
int main(){
	int ar[6]={90,9,23,5,43,12};
	print(ar,6);
	cout<<endl;
	Bubble(ar,6);
	print(ar,6);
	cout<<endl;
	insertion(ar,6);
	print(ar,6);
	cout<<endl;
	selection(ar,6);
	print(ar,6);
	cout<<endl;
	merge_sort(ar,0,5);
	print(ar,6);
}