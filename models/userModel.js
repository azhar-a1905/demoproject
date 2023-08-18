const mongoose= require('mongoose');        
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,'provide a password'],
        minlength:8,
        select:false
    },
    passwordConfirm:{
        type:String,
        required:[true,'confirm your password'],
        validate:{
            validator: function(el){
                return el ===this.password;
            },
            message:'The passwords are not same !'

        }
    }
})
const User= mongoose.model('User',userSchema);

module.exports=User;