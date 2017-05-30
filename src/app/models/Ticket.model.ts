/**
 * Created by Kamil on 24.04.2017.
 */

import {TicketType} from '../enums/TicketType.enum';

export class Ticket {

  private _id: number;
  private _type: number;
  private _title: string;
  private _inProjectId: string;
  private _createDate: string;
  private _lastModificationDate: string;
  private _description: string;
  private _points: number;
  private _assignee: number;
  private _reporter: number;
  private _watchers: number; // todo: array - find a way to bind that
  private _priority: number; // todo: create enum
  private _label: number;
  private _environment: string;
  private _sprintName: string;
  private _status: number; // todo: create enum
  private _attachments: number; // todo: array - find a way to bind that

  private _comments: number; // todo: array - find a way to bind that
  private _workLog: number; // todo: array - find a way to bind that
  private _history: number; // todo: array - find a way to bind that


  constructor(id: number,
              type: number,
              title: string,
              inProjectId: string,
              createDate: string,
              lastModificationDate: string,
              description: string,
              points: number,
              assignee: number,
              reporter: number,
              watchers: number,
              priority: number,
              label: number,
              environment: string,
              sprintName: string,
              status: number,
              attachments: number,
              comments: number,
              workLog: number,
              history: number) {

    this._id = id;
    this._type = type;
    this._title = title;
    this._inProjectId = inProjectId;
    this._createDate = createDate;
    this._lastModificationDate = lastModificationDate;
    this._description = description;
    this._points = points;
    this._assignee = assignee;
    this._reporter = reporter;
    this._watchers = watchers;
    this._priority = priority;
    this._label = label;
    this._environment = environment;
    this._sprintName = sprintName;
    this._status = status;
    this._attachments = attachments;
    this._comments = comments;
    this._workLog = workLog;
    this._history = history;
  }


  public getId(): number {
    return this._id;
  }

  public setId(value: number) {
    this._id = value;
  }

  public getType(): number {
    return this._type;
  }

  public setType(value: number) {
    this._type = value;
  }

  public getTypeName(): string {
    return TicketType[this.getType()];
  }

  public getTitle(): string {
    return this._title;
  }

  public setTitle(value: string) {
    this._title = value;
  }

  public getInProjectId(): string {
    return this._inProjectId;
  }

  public setInProjectId(value: string) {
    this._inProjectId = value;
  }

  public getCreateDate(): string {
    return this._createDate;
  }

  public setCreateDate(value: string) {
    this._createDate = value;
  }

  public getLastModificationDate(): string {
    return this._lastModificationDate;
  }

  public setLastModificationDate(value: string) {
    this._lastModificationDate = value;
  }

  public getDescription(): string {
    return this._description;
  }

  public setDescription(value: string) {
    this._description = value;
  }


  public getPoints(): number {
    return this._points;
  }

  public setPoints(value: number) {
    this._points = value;
  }

  public getAssignee(): number {
    return this._assignee;
  }

  public setAssignee(value: number) {
    this._assignee = value;
  }

  public getReporter(): number {
    return this._reporter;
  }

  public setReporter(value: number) {
    this._reporter = value;
  }

  public getWatchers() {
    return this._watchers;
  }

  public setWatchers(value) {
    this._watchers = value;
  }

  public getPriority(): number {
    return this._priority;
  }

  public setPriority(value: number) {
    this._priority = value;
  }

  public getLabel(): number {
    return this._label;
  }

  public setLabel(value: number) {
    this._label = value;
  }

  public getEnvironment(): string {
    return this._environment;
  }

  public setEnvironment(value: string) {
    this._environment = value;
  }

  public getSprintName(): string {
    return this._sprintName;
  }

  public setSprintName(value: string) {
    this._sprintName = value;
  }

  public getStatus(): number {
    return this._status;
  }

  public setStatus(value: number) {
    this._status = value;
  }

  public getAttachments() {
    return this._attachments;
  }

  public setAttachments(value) {
    this._attachments = value;
  }

  public getComments() {
    return this._comments;
  }

  public setComments(value) {
    this._comments = value;
  }

  public getWorkLog() {
    return this._workLog;
  }

  public setWorkLog(value) {
    this._workLog = value;
  }

  public getHistory() {
    return this._history;
  }

  public setHistory(value) {
    this._history = value;
  }
}