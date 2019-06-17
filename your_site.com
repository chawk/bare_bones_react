server {
       listen 80;
       server_name www.your_site.com your_site.com;
       
       root /home/user/apps/your_site/;
       if ($http_host != "www.your_site.com") {
                 rewrite ^ http://www.your_site.com$request_uri permanent;
       }
       # serve static files
       location /static/ {
           alias /home/user/apps/your_site/dist/;
           expires 365d;
       }
	
       location / {
                proxy_pass http://127.0.0.1:9081;
                proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;

   }
}
