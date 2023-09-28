import type { RootStore } from "..";
import { gendersAndPurposeStore } from "./slice";


export const getLoadStatus = (store: RootStore):gendersAndPurposeStore["loadStatus"] => store.gendersAndPurposes.loadStatus

export const getGenders = (store: RootStore):gendersAndPurposeStore["genders"] => store.gendersAndPurposes.genders;

export const getDescriptionGender = (store: RootStore):gendersAndPurposeStore["genders"] => store.gendersAndPurposes.description_gender;

export const getPurposes = (store: RootStore):gendersAndPurposeStore["purposes"] => store.gendersAndPurposes.purposes;

export const getSex = (store: RootStore):gendersAndPurposeStore["sex"] => store.gendersAndPurposes.sex;