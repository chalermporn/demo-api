import { Controller, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('product')
export class ProductController {
    
    @Post('/create')
    createPost(@Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'received'
        });
    }

}
