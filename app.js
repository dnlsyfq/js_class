class Media {
    constructor(title,isCheckedOut,ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._isCheckedOut;
    }

     toggleCheckOutStatus(){
        if(this._isCheckedOut){
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
     }

     getAverageRating(){
        let sum = this._ratings.reduce((i,v) => i + v, 0);
        return sum / this._ratings.length;
     }

     addRating(newRating){
        this._ratings.push(newRating);
     }

    set isCheckedOut(i){
        this._isCheckedOut = i;
    }

}