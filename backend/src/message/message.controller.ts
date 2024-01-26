import { Controller, Post, Body,Get,Delete,Param,Put } from '@nestjs/common';
import { MessageService } from './message.service';
import { UpdateMessageDTO } from './dtos/update.message.dto';
import { Public } from 'src/auth/decorators/Public-Api.decorator';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Public()////per testim duhet te largohet me pas ne implementim front-back
  @Post('/sendMessage')
  async sendMessage(
    @Body('userId') userId: number,
    @Body('chatId') chatId: number,
    @Body('message') message: string,
  ) {
    return this.messageService.sendMessage(message, userId, chatId);
  }

  @Get('/:id')
  findMessage(@Param('id') id:string){
      if(!id){
          return null;
      }
      return this.messageService.findOne(parseInt(id));
  }
  @Delete('/:id')
  remove(@Param('id') id:string){
      return this.messageService.remove(parseInt(id));
  }
  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDTO) {
    return this.messageService.update(parseInt(id), updateMessageDto);
  }

  


}