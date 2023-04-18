import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class, ClassGroup, Topic, User } from '../models/models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  prefix: string = environment.rootUrl + "/instructor";
  constructor(
    globalService: GlobalService,
    private http: HttpClient
  ) {

  }

  addClass(newClass: Class, teacherId: number): Observable<Class> {
    const url = `${this.prefix}/class?teacherId=${teacherId}`;
    return this.http.post<Class>(url, newClass);
  }

  getAllClasses(): Observable<Class[]> {
    const url = `${this.prefix}/classes`;
    return this.http.get<Class[]>(url);
  }

  getClassById(id: number): Observable<Class> {
    const url = `${this.prefix}/class/${id}`;
    return this.http.get<Class>(url);
  }

  deleteClass(id: number): Observable<string> {
    const url = `${this.prefix}/class/${id}`;
    return this.http.delete<string>(url);
  }

  addGroup(newGroup: ClassGroup, classId: number): Observable<ClassGroup> {
    const url = `${this.prefix}/group?classId=${classId}`;
    return this.http.post<ClassGroup>(url, newGroup);
  }

  getAllGroups(classId: number): Observable<ClassGroup[]> {
    const url = `${this.prefix}/groups?classId=${classId}`;
    return this.http.get<ClassGroup[]>(url);
  }

  getGroupById(id: number): Observable<ClassGroup> {
    const url = `${this.prefix}/group/${id}`;
    return this.http.get<ClassGroup>(url);
  }

  deleteGroup(id: number): Observable<string> {
    const url = `${this.prefix}/group/${id}`;
    return this.http.delete<string>(url);
  }

  addTopic(newTopic: Topic, classId: number): Observable<Topic> {
    const url = `${this.prefix}/topic?classId=${classId}`;
    return this.http.post<Topic>(url, newTopic);
  }

  getAllTopics(classId: number): Observable<Topic[]> {
    const url = `${this.prefix}/topics?classId=${classId}`;
    return this.http.get<Topic[]>(url);
  }

  getTopicById(id: number): Observable<Topic> {
    const url = `${this.prefix}/topic/${id}`;
    return this.http.get<Topic>(url);
  }

  deleteTopic(id: number): Observable<string> {
    const url = `${this.prefix}/topic/${id}`;
    return this.http.delete<string>(url);
  }

  addStudentsToGroup(studentIds: number[], groupId: number): Observable<void> {
    const url = `${this.prefix}/group/students?groupId=${groupId}`;
    return this.http.post<void>(url, {ids: studentIds});
  }

  getStudentsInGroup(groupId: number): Observable<User[]> {
    const url = `${this.prefix}/group/students?groupId=${groupId}`;
    return this.http.get<User[]>(url);
  }
}
