//composition hook naming convention
//function should be prefaced with 'use'

import { ref } from 'vue';
export default function useAlert() {
    const alertIsVisible = ref(false);

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