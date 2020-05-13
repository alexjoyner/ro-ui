docker stack rm oee-master
sleep 20
docker stack deploy --compose-file ~/apps/oee-master/docker-local.yml oee-master
echo "App should be live shortly"