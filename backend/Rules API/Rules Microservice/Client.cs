﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace RulesAPI
{
    public class Client
    {
        public HttpClient AccountClient()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("https://localhost:5001");
            return client;
        }
        
        public HttpClient TransactionClient()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("https://localhost:5004");
            return client;
        }
    }
}
