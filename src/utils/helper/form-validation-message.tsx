
interface FormValidationMessageProps {
    messages: string[]
}

export default function FormValidationMessage({ messages }: FormValidationMessageProps): string {

    let result = ''
    messages.reverse().some((message) => {
        if (message != 'undefined') {
            result = "＊" + message
            return
        }
    })
    return result
}
