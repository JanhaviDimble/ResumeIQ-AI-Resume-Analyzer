FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY pom.xml ./
COPY mvnw ./
COPY src ./src
RUN chmod +x ./mvnw
RUN ./mvnw clean package -DskipTests
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "target/resumeiq-backend-0.0.1-SNAPSHOT.jar"]
