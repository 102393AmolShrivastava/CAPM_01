using {com.tcs.hr as my } from '../db/core';

service requestService {
    entity Requests as projection on my.Requests;
}