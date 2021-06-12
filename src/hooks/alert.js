//composition hook naming convention
//function should be prefaced with 'use'

import { ref } from 'vue';
//you can add your own parameters into your hooks which the component using the hook can change
export default function useAlert(startingVisibility = false) {
    const alertIsVisible = ref(startingVisibility);

    function showAlert(){
        alertIsVisible.value = true;
    }

    function hideAlert(){
        alertIsVisible.value = false;
    }

    return {
        alertIsVisible,
        showAlert,
        hideAlert
    }
}