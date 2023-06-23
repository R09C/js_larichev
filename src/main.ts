import {Container} from 'inversify';
import {App} from './app';
import 'reflect-metadata';
import {TYPES} from './TYPES';
import { AppBindings} from './app.module';
import {AuthBindings} from './auth/Auth.module';
import { UserBindings } from './user/User.module';


export interface IBootsrapReturn{
    appContainer:Container;
    app:App;
};

async function bootstrap():Promise<IBootsrapReturn> {
    const appContainer=new Container();
    appContainer.load(
        AppBindings,
        AuthBindings,
        UserBindings,
        );
    const app=appContainer.get<App>(TYPES.Application);
    await app.init();
    return {appContainer,app};
    
}
export const boot=bootstrap();