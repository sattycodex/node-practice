const successResponse=require('../utils/response').successResponse;
const errorResponse=require('../utils/response').errorResponse;
exports.getUsers=(req,res)=>{

    //service logic to fetch users from database
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ];  
    successResponse(res, users, 'Users fetched successfully');   
}

exports.getUserById=(req,res)=>{
    const userId=req.params.id;
    if(userId==1){
        const user = { id: 1, name: 'John Doe' };
        successResponse(res, user, 'User fetched successfully');
    }
    else if(userId==2){
        const user = { id: 2, name: 'Jane Doe' };
        successResponse(res, user, 'User fetched successfully');
    }
    else{
        errorResponse(res, new Error('User not found'));
    }
}