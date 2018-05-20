FROM openjdk:8-jdk-alpine
COPY ./ /home/
WORKDIR /home
RUN ./mvnw clean package -DskipTests
RUN ls -a
RUN ls target/    
ENTRYPOINT ["java","-jar","target/simplechat.jar"]