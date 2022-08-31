export class ListItem {
    constructor(account, password, arr) {
        if(arr.length === 0) {
            this.id = 1
        } else {
            this.id = arr[arr.length - 1].id + 1
        }

        this.account = account
        this.password = password
    }
}