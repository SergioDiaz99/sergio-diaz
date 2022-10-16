import { toast } from 'react-toastify'

export const showMessage = (msg:string) => {
  toast.error(msg, {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  })
}

export const showSuccessMessage = (msg:string) => {
  toast.success(msg, {
    position: 'bottom-center',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  })
}
