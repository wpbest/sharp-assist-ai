import { ListUsersData } from '../';
import { ConnectorConfig, DataConnect, QueryRef, QueryPromise} from '@angular/fire/data-connect';
import { CreateQueryResult} from '@tanstack/angular-query-experimental';
import { CreateDataConnectQueryResult, CreateDataConnectQueryOptions } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from 'firebase/app';
import { Injector } from '@angular/core';

export type ListUsersOptions = () => Omit<CreateDataConnectQueryOptions<ListUsersData, undefined>, 'queryFn'>;
export function injectListUsers(options?: ListUsersOptions, injector?: Injector): CreateDataConnectQueryResult<ListUsersData, undefined>;
