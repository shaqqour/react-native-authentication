import React, { useState } from 'react';
import { Alert, View } from 'react-native';

import * as api from "../../services/auth";

import Form from 'react-native-basic-form';
import CTA from "../../components/CTA";
import { Header, ErrorText } from "../../components/Shared";