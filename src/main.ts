import {Container,ContainerModule,interfaces} from 'inversify';
import {App} from './app';
import 'reflect-metadata';
import {ILoggerServise} from './logger/logger.service.interface';
import {LoggerService} from './logger/logger.service';
import {UserController} from './user/UserController';
import {IUserController} from './user/UserController.interface';
import {TYPES} from './TYPES';
import{IExeptionFilter}from "./erors/exeption.filter.interface"
import{ExeptionFilter}from "./erors/exption.filer"
export interface IBootsrapReturn{
    appContainer:Container;
    app:App;
};

export const appBindings=new ContainerModule ((bind:interfaces.Bind)=>{
    bind<ILoggerServise>(TYPES.LoggerService).to(LoggerService).inSingletonScope();
    bind<IUserController>(TYPES.UserController).to(UserController);
    bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
    bind<App>(TYPES.Application).to(App);
});

async function bootstrap():Promise<IBootsrapReturn> {
    const appContainer=new Container();
    appContainer.load(appBindings);
    const app=appContainer.get<App>(TYPES.Application);
    await app.init();
    return {appContainer,app};
    
}
export const boot=bootstrap();