let {hbar, wbar} = useSideBarData()
export function hideSidebar(){
    if(!hbar.value){
        wbar.value = '5rem'
    }else{
        wbar.value = '16rem'
    }  

    hbar.value=!hbar.value 
}