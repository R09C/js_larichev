import {Container,ContainerModule,interfaces} from 'inversify';
import {App} from './app';
import {ILoggerServise} from './logger/logger.service.interface';
import {LoggerService} from './logger/logger.service';
import {UserController} from './user/user.controller';
import {TYPES} from './TYPES';
export interface IBootsrapReturn{
    appContainer:Container;
    app:App;
};

export const appBindings=new ContainerModule ((bind:interfaces.Bind)=>{
    bind<ILoggerServise>(TYPES.LoggerService).to(LoggerService).inSingletonScope();
    bind<UserController>(TYPES.UserController).to(UserController);
    bind<ILoggerServise>(TYPES.LoggerService).to(LoggerService);
});